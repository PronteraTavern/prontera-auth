import { SetMetadata } from '@nestjs/common';

// Generates a @Public decorator to be used in endpoints declaring it public (no need for JWT auth)
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
