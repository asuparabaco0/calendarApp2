import React from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";

import { 
    LocationOnOutlined, 
    NotesOutlined,
    AccessTime,
    Close
 } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";
import * as styles from "./style.css";

const spacer = { margin: "4px 0" };
const Title = withStyles({
    root: { fontSize: 22 }
})(Input);
const AddScheduleDialog = ({ 
    schedule: {
    form:{ title, location, description, date },
     isDialogOpen,
     IsEditStart
     }, 
     closeDialog,
     setSchedule,
     saveSchedule,
     setIsEditStart
     }) => {
         //isDialogOpen === falseかつtitle === ""のとき?
         const isTitleInvalid = !title && setIsEditStart
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <div className={styles.closeButton}>
                    <IconButton onClick={closeDialog} size="small">
                        <Close />
                    </IconButton>
                </div>
            </DialogActions>
            <DialogContent>
                <Title 
                autoFocus 
                fullWidth 
                placeholder="タイトルと日時を追加" 
                //titleを変更したいのであれば{ title: "次のstate" }という風に渡してやれば ok 
                value={title}
                onChange={e => setSchedule({title:e.target.value})}
                //onBLur 一度でもフォーカスしてフォーカスを外した状態
                onBlur={setIsEditStart}
                error={isTitleInvalid}/>
                <div className={styles.validation}>
                {isTitleInvalid && (
                    <Typography variant="caption" component="div" color="error">
                        title is needed
                    </Typography>
                )}
                </div>
                <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            style={spacer}
                            value={date}
                            //dayjsオブジェクトをそのまま引数に渡す
                            onChange={ e => setSchedule({date: e})}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <LocationOnOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                        style={spacer} 
                        fullWidth 
                        placeholder="場所を追加" 
                        value={location}
                        onChange={e => setSchedule({location: e.target.value})}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                        style={spacer} 
                        fullWidth 
                        placeholder="説明を追加" 
                        value={description}
                        onChange={e => setSchedule({ description: e.target.value})}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={saveSchedule}
                disabled={!title}>
                    保存する
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddScheduleDialog;
