import { IsString } from 'class-validator';

export class CreateWalletAddressDto {
  @IsString()
  address: string;

  constructor() {
    this.address = '';
  }
}
