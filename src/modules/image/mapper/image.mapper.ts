import { ImageUrlDto } from "../dto";

interface ImageRaw {
    url: string
    signature: string
    apiKey: string
    cloud_name: string
    timestamp: number
    folder: string
    public_id: string
}

export class ImageMapper {
    static toResponseDto(image: ImageRaw): ImageUrlDto {
      return {
        url: image.url.trim() || 'Sin url',
        signature: image.signature.trim() || 'Sin firma',
        apiKey: image.apiKey.trim() || 'Sin api key',
        cloud_name: image.cloud_name.trim() || 'Sin nombre de nube',
        timestamp: image.timestamp || 0,
        folder: image.folder.trim() || 'Sin carpeta',
        public_id: image.public_id.trim() || 'Sin id publico',
      };
    }
}