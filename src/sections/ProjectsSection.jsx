"use client"

import React from 'react'

const projects = [
  {
    id: 1,
    title: 'OpenShop — E‑commerce SPA',
    description:
      'A fast, responsive single‑page e‑commerce app with product browsing, cart, and checkout flows. Includes search, filters, and optimistic UI for cart updates.',
    tech: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Prisma'],
    link: '#',
  },
  {
    id: 2,
    title: 'Devfolio — Personal Blogging Platform',
    description:
      'Markdown‑powered blog with syntax highlighting, image uploads, and SEO‑friendly routes. Features an admin dashboard for draft management and publishing.',
    tech: ['Next.js', 'MDX', 'Vercel', 'Postgres', 'Cloudinary'],
    link: '#',
  },
  {
    id: 3,
    title: 'TaskFlow — Collaborative Task Board',
    description:
      'Real‑time kanban board for teams with drag‑and‑drop, presence indicators, and role‑based permissions. Synchronizes via WebSockets for instant updates.',
    tech: ['React', 'Socket.IO', 'Node.js', 'MongoDB', 'Framer Motion'],
    link: '#',
  },
  {
    id: 4,
    title: 'GraphVis — Data Visualization Dashboard',
    description:
      'Interactive charts and network graphs for visualizing large datasets. Includes CSV import, filtering, and export features.',
    tech: ['D3.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 5,
    title: 'GraphVis — Data Visualization Dashboard',
    description:
      'Interactive charts and network graphs for visualizing large datasets. Includes CSV import, filtering, and export features.',
    tech: ['D3.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 6,
    title: 'GraphVis — Data Visualization Dashboard',
    description:
      'Interactive charts and network graphs for visualizing large datasets. Includes CSV import, filtering, and export features.',
    tech: ['D3.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 7,
    title: 'GraphVis — Data Visualization Dashboard',
    description:
      'Interactive charts and network graphs for visualizing large datasets. Includes CSV import, filtering, and export features.',
    tech: ['D3.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow border-[#ffffff]/20 bg-[#1a1a1a]/50"
          >
            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{p.description}</p>
            <p className="text-xs text-gray-500 mb-3">Tech: {p.tech.join(', ')}</p>
            <a
              href={p.link}
              className="inline-block text-sm text-blue-300 hover:underline"
            >
              View project
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
