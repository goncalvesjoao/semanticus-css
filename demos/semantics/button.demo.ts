// demos/semantics/button.demo.ts

type ButtonArgs = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const base = ({ label = 'Button', variant = 'primary', size = 'md' }: ButtonArgs) => {
  return `<button class="btn-${variant} btn-${size}">${label}</button>`;
};

export const ButtonDemo = {
  base,

  primary: () => base({ variant: 'primary', label: 'Primary' }),

  secondary: () => base({ variant: 'secondary', label: 'Secondary' }),

  sizes: () => `
    ${base({ size: 'sm', label: 'Small' })}
    ${base({ size: 'md', label: 'Medium' })}
    ${base({ size: 'lg', label: 'Large' })}
  `,

  playground: (args: ButtonArgs) => base(args),
};
