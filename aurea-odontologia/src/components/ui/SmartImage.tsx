import { useState } from "react";

type Props = {
  /** Função que devolve a URL para uma largura (px). */
  src: (w: number) => string;
  alt: string;
  widths?: number[];
  sizes?: string;
  /** Classes do contêiner (defina aqui a proporção para reservar espaço). */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * Imagem com espaço reservado (sem salto de layout), srcset responsivo
 * e fallback visual caso a URL falhe.
 */
export default function SmartImage({
  src,
  alt,
  widths = [480, 800, 1200],
  sizes = "100vw",
  className = "",
  imgClassName = "",
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={`${alt} (imagem indisponível)`}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sand to-[#d9cdb8]"
        >
          <svg viewBox="0 0 64 64" className="h-14 w-14 opacity-60" aria-hidden="true">
            <path
              d="M32 14 L46 50 H39.5 L36.6 42 H27.4 L24.5 50 H18 Z M32 26.5 L29.2 36 H34.8 Z"
              fill="#173F3A"
            />
          </svg>
        </div>
      ) : (
        <img
          src={src(widths[Math.floor(widths.length / 2)])}
          srcSet={widths.map((w) => `${src(w)} ${w}w`).join(", ")}
          sizes={sizes}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
