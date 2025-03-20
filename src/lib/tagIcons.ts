import AstroIcon from "@assets/astro.svg";
import CSharpIcon from "@assets/c-sharp.svg";
import CPlusPlusIcon from "@assets/c++.svg";
import ClerkIcon from "@assets/clerk.svg";
import DockerIcon from "@assets/docker.svg";
import LatviaIcon from "@assets/flag_of_latvia.svg";
import JupyterIcon from "@assets/jupyter.svg";
import DotNetCore from "@assets/net-core.svg";
import NextJsIcon from "@assets/nextjs.svg";
import OpenGLIcon from "@assets/opengl.svg";
import PostgreSQLIcon from "@assets/postgresql.svg";
import PostHogIcon from "@assets/posthog.svg";
import PythonIcon from "@assets/python.svg";
import PyTorchIcon from "@assets/pytorch.svg";
import ReactIcon from "@assets/react.svg";
import RustIcon from "@assets/rust.svg";
import TailwindIcon from "@assets/tailwind.svg";
import TensorFlowIcon from "@assets/tensorflow.svg";
import TypeScriptIcon from "@assets/typescript.svg";
import WebAssemblyIcon from "@assets/webassembly.svg";

// Map of tag names to icon components
export const tagIcons: Record<string, ImageMetadata> = {
  astro: AstroIcon,
  csharp: CSharpIcon,
  "c#": CSharpIcon,
  "c++": CPlusPlusIcon,
  cplusplus: CPlusPlusIcon,
  clerk: ClerkIcon,
  docker: DockerIcon,
  latvia: LatviaIcon,
  jupyter: JupyterIcon,
  "net core": DotNetCore,
  ".net core": DotNetCore,
  ".net": CSharpIcon,
  nextjs: NextJsIcon,
  "next.js": NextJsIcon,
  opengl: OpenGLIcon,
  postgresql: PostgreSQLIcon,
  postgres: PostgreSQLIcon,
  posthog: PostHogIcon,
  python: PythonIcon,
  pytorch: PyTorchIcon,
  react: ReactIcon,
  rust: RustIcon,
  tailwind: TailwindIcon,
  tailwindcss: TailwindIcon,
  tensorflow: TensorFlowIcon,
  typescript: TypeScriptIcon,
  ts: TypeScriptIcon,
  wasm: WebAssemblyIcon,
  webassembly: WebAssemblyIcon,
};

/**
 * Get the icon component for a given tag
 * @param tag The tag to get the icon for
 * @returns The icon component or undefined if not found
 */
export const getTagIcon = (tag: string): ImageMetadata | undefined => {
  return tagIcons[tag.toLowerCase()];
};
