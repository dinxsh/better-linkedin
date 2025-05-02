import React from 'react';

type Props = {
  title: string;
  content: React.ReactNode;
};

export function SidebarSection({ title, content }: Props) {
  return (
    <section className="mb-6 last:mb-0">
      <h3 className="text-md font-semibold text-gray-900 mb-2">{title}</h3>
      <div>{content}</div>
    </section>
  );
} 