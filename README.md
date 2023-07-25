This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


******
<ProjectItem title='Sidebar Nav'
               backgroundImg={Project1}
               projectUrl='/portfolio1'
              />
              <ProjectItem title='Personal Portfolio using React'
               backgroundImg={Project2}
               projectUrl='/portfolio1'
              />
              <ProjectItem title='Personal Portfolio using NextJs'
               backgroundImg= {Project3}
               projectUrl='/portfolio1'
              />
              <ProjectItem title='E-Commerce Website'
               backgroundImg={Project4}
               projectUrl='/portfolio1'
              />
              <ProjectItem title='Social Media Clone'
               backgroundImg={Project5}
               projectUrl='/portfolio1'
              />
              <ProjectItem title='MERN-Auth'
               backgroundImg={Project6}
               projectUrl='/portfolio1'
              />
********
 <div className=' relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-slate-500'>
                <Image className=' rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className=' text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className=' pt-2 pb-4 text-white'>React JS</p>
                    <Link href={ProjectUrl}>
                        <p className=' text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
              </div>
  )
  *******
  import Project2 from '../../public/assets/portfolio2.jpg'
import Project3 from '../../public/assets/portfolio3.jpg'
import Project4 from '../../public/assets/portfolio4.jpg'
import Project5 from '../../public/assets/portfolio5.jpg'
import Project6 from '../../public/assets/portfolio6.jpg'