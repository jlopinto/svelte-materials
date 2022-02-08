import { recipe } from '@vanilla-extract/recipes';

export const mediaBlock = recipe({
  base: {
    display: 'flex'
  },
  variants: {
    alignItems: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      }
    }
  }
});
