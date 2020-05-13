export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb65f795b7c4db58592985',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c5yeasq8',
                  apiId: '32be2847-0c68-4189-94e7-6c05e5284b2c'
                },
                {
                  buildHookId: '5ebb65f77a239b02e44cd1e2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ra8k9jdv',
                  apiId: '1647d611-a431-4dcb-a3ed-691178ef8260'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jsimpson15011/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ra8k9jdv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
