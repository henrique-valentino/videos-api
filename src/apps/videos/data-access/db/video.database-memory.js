class DatabaseMemory {
  constructor() {
    this.videos = new Map();
  }

  create(video) {
    this.videos.set(video.id, video);
    return video;
  }

  async list(title) {
    const result = Array.from(this.videos.values()).filter((video) => {
      if (!title) return true;
      return video.title.includes(title);
    });
    return result;
  }

  findById(id) {
    return this.videos.get(id);
  }

  update(id, video) {
    this.videos.set(id, video);
  }

  delete(id) {
    this.videos.delete(id);
  }
}

export default DatabaseMemory;
