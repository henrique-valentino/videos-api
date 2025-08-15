import VideoService from "../../domain/services/video.services.js";

const service = new VideoService();

class VideoController {

  constructor(service) {
    this.service = service;
  }

  async createVideo(request, reply) {
    const { title, description, duration } = request.body;

    service.createVideo({
      title,
      description,
      duration,
    });

    return reply.status(201).send({ message: "Video created successfully" });
  }

  async listVideos(request, reply) {
    const { search } = request.query;
    const videos = await service.getAllVideos(search);
    return Array.from(videos);
  }

  async getVideoById(request, reply) {
    const { id } = request.params;
    const video = await service.getVideoById(id);
    if (!video) {
      return reply.status(404).send({ message: "Video not found" });
    }
    return video;
  }

  async updateVideo(request, reply) {
    const { id } = request.params;
    const { title, description, duration } = request.body;
    service.updateVideo(id, { title, description, duration });
    return reply.status(204).send();
  }

  async deleteVideo(request, reply) {
    const { id } = request.params;
    service.deleteVideo(id);
    return reply.status(204).send();
  }

}

export default VideoController;
