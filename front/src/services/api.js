//この形はお決まりなのでおぼえておく　
const host = "http://localhost:8080/api";
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const get = async path => {
    const resp = await fetch(url(path));
    //respのjsonデータのみを取得
    checkError(resp.status);
    const result = await resp.json();

    return result;
};

//送るデータを受け取っている
export const post = async (path, body) => {
    const options = { ...header, method: "POST", body:JSON.stringify(body) }
    const resp = await fetch(url(path), options)
    checkError(resp.status);
    //送りたいデータをjsonに変換
    const result = await resp.json();
    return result
}

export const deleteRequest = async path => {
    const options = { method: "DELETE"};
    const resp = await fetch(url(path), options)
    checkError(resp.status);
    // 204 No Contentが返ってくるので成功の場合は何もreturnしない
    //awaitで処理が終わるのを待ってreturnする
    return;
}

const checkError = status => {
    // 今回は400以上(不正なリクエスト or サーバーの問題)の場合は全部まとめてエラーとして処理
    if (status >= 400) {
        throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
    }
}
