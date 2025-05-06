import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // ✅ adjust path as needed

@UseGuards(JwtAuthGuard) // ✅ Protects all routes in this controller
@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Supplier | null> {
    return this.supplierService.findOne(+id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() supplierDto: CreateSupplierDto): Promise<Supplier> {
    return this.supplierService.create(supplierDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(
    @Param('id') id: string,
    @Body() supplierDto: UpdateSupplierDto,
  ): Promise<Supplier | null> {
    return this.supplierService.update(+id, supplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.supplierService.remove(+id);
  }
}
