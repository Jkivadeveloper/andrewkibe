const express = require('express');
const router = express.Router();
const { getAllContents, getContent } = require('../database/contents');

router.get('/', async (req, res) => {
  const contents = await getAllContents();
  res.send({ status: 'OK', data: contents });
});

router.get('/:contentId', async (req, res) => {
  try {
    const content = await getContent(req.params.contentId);

    if (!content) {
      res.status(404).send({ status: 'FAILED', error: 'content not found' });
      return;
    }

    res.send({ status: 'OK', data: content });
  } catch (e) {
    res.status(401).send({ status: 'FAILED', error: e.message });
  }
});

module.exports = router;
