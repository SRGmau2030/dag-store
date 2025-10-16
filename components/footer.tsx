import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#070066] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">DAG</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Tu tienda confiable de mascotas exóticas. Especialistas en peces, geckos, serpientes y todos sus
              accesorios.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fish"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Peces
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=geckos"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Geckos
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=snakes"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Serpientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Av. Principal 123, Ciudad de México</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                <a href="tel:+525512345678" className="text-white/80 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <a href="mailto:info@dagpets.com" className="text-white/80 hover:text-white transition-colors">
                  info@dagpets.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <p className="text-white/80 text-sm">Mantente al día con nuestras últimas novedades y promociones</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} DAG Tienda de Mascotas. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
