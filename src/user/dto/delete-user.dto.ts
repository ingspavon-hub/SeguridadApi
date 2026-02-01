import { PartialType } from '@nestjs/swagger';

removeEventListener(id: number) {
    return this.prisma.user.delete({ where: { id } });
}