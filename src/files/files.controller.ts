import {Controller, HttpCode, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {FileElementResponse} from "./dto/file-element-response.response";
import {FilesService} from "./files.service";

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @HttpCode(200)
    @Post('upload')
    @UseInterceptors(FileInterceptor('files'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
        return this.filesService.saveFiles([file]);
    }
}
