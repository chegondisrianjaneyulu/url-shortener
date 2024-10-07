import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateUrlDto {
    @IsString()
    original_url: string  

    @IsOptional()
    @IsNumber()
    expires_at?: number
}
