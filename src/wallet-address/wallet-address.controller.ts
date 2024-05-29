import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';

@Controller('wallet-addresses')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) { }

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletAddressService.findOne(+id);
  }

  @Post()
  create(@Body() createWalletAddressDto: WalletAddress) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWalletAddressDto: WalletAddress) {
    return this.walletAddressService.update(+id, updateWalletAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletAddressService.remove(+id);
  }
}
