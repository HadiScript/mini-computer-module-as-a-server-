import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';


@Injectable()
export class CpuService {

  constructor(private powserService: PowerService) { };


  computer(a: number, b: number) {
    console.log("Drawiing 10watts from power service");
    this.powserService.supplyPower(10);
    return a + b;
  }


}
