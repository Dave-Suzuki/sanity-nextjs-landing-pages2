export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6350e1b2e8999e6e209797f1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-jy74i7g9',
                  apiId: 'd27e570c-e496-4d84-a070-aeab8d2407ff'
                },
                {
                  buildHookId: '6350e1b386c0766d7fb88b02',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-xykb3gww',
                  apiId: '10d892fa-28bd-4f8c-bc1b-2d9644862094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dave-Suzuki/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-xykb3gww.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
