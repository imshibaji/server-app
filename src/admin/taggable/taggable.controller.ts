import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaggableService } from './taggable.service';
import { taggable } from './entities/taggable.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: taggable,
  },
})
@ApiTags('Taggable')
@Controller('admin/taggables')
export class TaggableController implements CrudController<taggable> {
  constructor(public service: TaggableService) {}
}
