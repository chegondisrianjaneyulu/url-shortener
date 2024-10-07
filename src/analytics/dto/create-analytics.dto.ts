import { IsNumber, isNumber, IsString } from "class-validator"

export class CreateAnalyticsDto {
    @IsNumber()
    url_id: number

    @IsString()
    ip_address: string

    @IsString()
    device: string
}
