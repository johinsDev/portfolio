import Link from "next/link";
import { RiGithubFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.youtube.com/channel/UC9QqBypELf0zqyO2LdL5Q8w",
    icon: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/johan-villamil-9a1a6b1b4/",
    icon: <RiLinkedinFill />,
  },
  {
    path: "test",
    icon: <RiGithubFill />,
  },
];

interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Socials(props: SocialsProps) {
  return (
    <div className="mx-auto flex gap-x-6 xl:mx-0" {...props}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary text-base transition-all"
          >
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
}
