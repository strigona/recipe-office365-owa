module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unreadMail = parseInt(jQuery("div[title*='Inbox'] > span > span").first().contents().first().text(), 10);
        Franz.setBadge(unreadMail);
    };
    Franz.loop(getMessages);
};
