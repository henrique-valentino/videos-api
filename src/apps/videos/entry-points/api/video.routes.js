export default function videoRoutes(app, controller) {
  app.post('/videos', controller.createVideo);
  app.get('/videos', controller.listVideos);
  app.get('/videos/:id', controller.getVideoById);
  app.put('/videos/:id', controller.updateVideo);
  app.delete('/videos/:id', controller.deleteVideo);
}