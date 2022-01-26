import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const root = recipe({
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

export type rootType = RecipeVariants<typeof root>;