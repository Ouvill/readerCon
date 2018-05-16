const express = require('express');
const router = express.Router();
const moment = require('moment')
const dbNovel = require('../../utils/db/novels')
const dbUsers = require('../../utils/db/users')
const dbChapters = require('../../utils/db/chapters');
// const novels = require('./novels')

const reqChapterIdCheck = (req, res, next) => {
    const chapterNum = req.params.chapterNum
    if (!isFinite(chapterNum)) {
        res.status(400).json({
            result: false,
            message: 'bad request.',
            messageJa: '要求が不正です'
        })
        return
    }
    next()
}

const existChapter = async (req, res, next) => {
    const novelId = req.params.novelId
    const chapterNum = req.params.chapterNum
    chapter = await dbChapters.chapterContent(novelId, chapterNum);
    if (!chapter) {
        res.status(404).json({
            result: false,
            message: 'no chapter',
            messageJa: '章が存在しません'
        })
        return
    }
    req.chapter = chapter
    next()
}

const sendChapter = async (req, res, next) => {
    let chapter = req.chapter
    if (typeof (chapter) === 'undefined') {
        chapter = await dbChapters.chapterContent(novelId, chapterNum);
    }
    res.json({
        result: true,
        message: 'here you are',
        chapter: chapter
    })
}


router.get('/:chapterNum'
    , function (req, res, next) {
        console.dir(novels)
    })

module.exports = router;
module.exports.reqChapterIdCheck = reqChapterIdCheck
module.exports.existChapter = existChapter
module.exports.sendChapter = sendChapter
