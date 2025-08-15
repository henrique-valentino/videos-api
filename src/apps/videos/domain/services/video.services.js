import { randomUUID } from "crypto";

class VideoService {
  constructor(videoRepository) {
    this.videoRepository = videoRepository;
  }

  async getAllVideos(search) {
    return await this.videoRepository.findAll(search);
  }

  async getVideoById(id) {
    const video = await this.videoRepository.findById(id);
    if (!video) {
      console.log("Video not found");
    }
    return video;
  }

  async createVideo(data) {
    const newVideo = {
      id: randomUUID(),
      ...data,
    };
    return await this.videoRepository.create(newVideo);
  }

  async updateVideo(id, data) {
    const updated = await this.videoRepository.update(id, data);
    if (!updated) {
      console.log("Video not found or not updated");
    }
    return updated;
  }

  async deleteVideo(id) {
    const deleted = await this.videoRepository.delete(id);
    if (!deleted) {
      console.log("Video not found or not deleted");
    }
    return deleted;
  }
}

export default VideoService;
