import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  gen: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column({ type: 'decimal' })
  engineSize: number;

  @Column()
  bodyType: string;

  @Column()
  gearType: string;

  @Column({ nullable: true })
  vin: string;

  @Column({ type: 'timestamptz' })
  purchaseDate: Date;

  @Column()
  purchasePriceByn: number;
}
