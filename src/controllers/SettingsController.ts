import { Request, Response } from "express";
import { SettingsService } from "../services/SettingService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (exception) {
      return response
        .status(400)
        .json({
          message: exception.message
        });
    }
  }
}

export { SettingsController };
