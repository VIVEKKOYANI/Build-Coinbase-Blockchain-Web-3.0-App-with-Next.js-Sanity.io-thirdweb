import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'ul3gtrdh',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skZAoAczUeONlR49AMWaxrJdOxNpbHtLSykz7CRUVN2132Ur1qvFHZjNSYAJt0fTMkQ7UzwxTONGGqDznAi4mwoBcEnhp1wKp9ZnlXEe008EXWQJKKng4NyRbDi5YuHizQF5YwMuwg7KBpaWyhafpC1CRX0dg0lhTsX7sICRyBtz0eGVAJjw',
    useCdn: false,
})