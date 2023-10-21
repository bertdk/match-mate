import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class PlayerBody {
  @IsUUID()
  @IsOptional()
  public id?: string;

  @IsString()
  @Length(1, 255)
  public name: string;
}
