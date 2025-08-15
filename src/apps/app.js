import { fastify } from "fastify";
import videoRoutes from "./videos/entry-points/api/video.routes.js";
import VideoController from "./videos/entry-points/api/video.controller.js";
import VideoService from "./videos/domain/services/video.services.js";
import VideoRepository from "./videos/domain/repositories/video.repository.js";
import databaseMemory from "./videos/data-access/db/video.database-memory.js";

// Instancie as dependências
const videoRepository = new VideoRepository(databaseMemory);
const videoService = new VideoService(videoRepository);
const videoController = new VideoController(videoService);

export function buildApp() {
  const app = fastify();

  // Passe o controller para as rotas
  videoRoutes(app, videoController);

  return app;
}
