class VideoRepository {
    
  constructor(database) {
    this.database = database;
  }

  async findById(id) {
    return this.database.findById(id);
  }

  async findAll(search) {
    return await this.database.list(search);
  }

  async create(video) {
    return this.database.create(video);
  }

  async update(id, video) {
    return this.database.update(id, video);
  }

  async delete(id) {
    return this.database.delete(id);
  }
}

export default VideoRepository;
