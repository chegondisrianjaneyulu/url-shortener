import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateUrlDto {
    @IsString()
    original_url: string  

    @IsOptional()
    @IsDateString()
    expires_at?: number
}
