const express = require('express')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

const uploadDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, uuidv4() + ext)
  }
})

const upload = multer({ storage })

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded')
  const id = req.file.filename
  res.send(`${req.protocol}://${req.get('host')}/f/${id}`)
})

app.get('/f/:id', (req, res) => {
  const filePath = path.join(uploadDir, req.params.id)
  if (!fs.existsSync(filePath)) return res.status(404).send('File not found')
  res.sendFile(filePath)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})