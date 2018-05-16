const express = require('express');
const router = express.Router();
const moment = require('moment')
const dbNovel = require('../../utils/db/novels')
const dbUsers = require('../../utils/db/users')
const dbChapters = require('../../utils/db/chapters');

/* GET users listing. */
const resNoNovel = (res) => {
    res.status(404).json({
        result: false,
        message: 'no novel',
        messageJa: '小説が存在しません'
    });
}

router.get('/:novelId', async function (req, res, next) {
    const novelId = req.params.novelId;
    const userId = req.auth.userId
    if (!isFinite(novelId)) {
        res.status(400).json({
            result: false,
            message: 'bad requests',
            messageJa: 'アクセスが不正です'
        })
        return
    }

    const novel = await dbNovel.infoWithContests(novelId);
    if (!novel) {
        resNoNovel(res);
        return
    }

    if (!novel.public && moment(novel.startContestAt).isAfter(moment() && novel.authorId != userId)) {
        res.status(403).json({
            result: false,
            message: 'this novel is not publiced',
            messageJa: 'この小説はまだ一般公開されていません'
        })
        return
    }

    if (novel.public || moment(novel.contestPeriod).isBefore(moment()) || novel.authorId == userId) {
        const author = await dbUsers.publicInfo(novel.authorId);
        novel.author = author
    } else {
        delete novel.authorId
    }
    const chapterList = await dbChapters.novelChapters(novelId);
    novel.chapters = chapterList

    res.json({
        result: true,
        message: 'here you are',
        novel: novel
    })
});

module.exports = router;
