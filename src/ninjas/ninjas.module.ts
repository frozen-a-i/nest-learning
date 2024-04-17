import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';

@Module({
  providers: [NinjasService],
})
export class NinjasModule {}
