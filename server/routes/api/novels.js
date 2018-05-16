const express = require('express');
const router = express.Router();
const moment = require('moment')
const dbNovel = require('../../utils/db/novels')
const dbUsers = require('../../utils/db/users')
const dbChapters = require('../../utils/db/chapters');
const chapters = require('./chapters')

let novel = {};
/* GET users listing. */
const requestNovelIdCheck = (req, res, next) => {
    const novelId = req.params.novelId;
    if (!isFinite(novelId)) {
        res.status(400).json({
            result: false,
            message: 'bad requests',
            messageJa: 'アクセスが不正です'
        })
        return
    }
    next();
}

const existNovel = async (req, res, next) => {
    try {
        const novelId = req.params.novelId;
        novel = await dbNovel.infoWithContests(novelId);
        if (!novel) {
            res.status(404).json({
                result: false,
                message: 'no novel',
                messageJa: '小説が存在しません'
            });
            return
        }
        req.novel = novel
        next()
    } catch (err) {
        console.log(err)
    }
}

const isNovelPublic = async (req, res, next) => {
    try {
        const novelId = req.params.novelId;
        const userId = req.auth.userId
        if ((!novel.public && moment(novel.startContestAt).isAfter(moment())) && userId != novel.authorId) {
            res.status(403).json({
                result: false,
                message: 'this novel is not publiced',
                messageJa: 'この小説はまだ一般公開されていません'
            })
            return
        }
        next();
    } catch (err) {
        console.log(err)
    }
}

router.get('/:novelId',
    requestNovelIdCheck,
    existNovel,
    isNovelPublic,
    async function (req, res, next) {
        const novelId = req.params.novelId;
        const userId = req.auth.userId

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

router.get('/:novelId/chapters/:chapterNum',
    requestNovelIdCheck,
    existNovel,
    isNovelPublic,
    chapters.reqChapterIdCheck,
    chapters.existChapter,
    chapters.sendChapter
)

module.exports = router;

module.exports.requestNovelIdCheck = requestNovelIdCheck
module.exports.existNovel = existNovel
module.exports.isNovelPublic = isNovelPublic
