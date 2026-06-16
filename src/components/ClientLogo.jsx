import React from 'react';

export default function ClientLogo({ name, className = '', height = 35, width = 140 }) {
  const normName = String(name).trim().toUpperCase();

  // Helper to render inline SVGs for each shipping line
  const renderSvg = () => {
    switch (normName) {
      case 'MAERSK':
      case 'MAERSK LINE':
      case 'MAERSK INDIA':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Light Blue background square with star */}
            <rect x="10" y="10" width="30" height="30" rx="3" fill="#0082c3" />
            {/* White 7-pointed star inside square */}
            <polygon 
              points="25,14 27,20 33,18 29.5,23.5 34,28.5 28,27.5 25,33 22,27.5 16,28.5 20.5,23.5 17,18 23,20" 
              fill="#ffffff" 
            />
            {/* Bold Wordmark */}
            <text x="50" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" fill="currentColor" letterSpacing="1">
              MAERSK
            </text>
          </svg>
        );

      case 'MSC':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Yellow circle */}
            <circle cx="25" cy="25" r="14" fill="#ffd100" />
            {/* Script 'm' inside circle */}
            <text x="25" y="32" fontFamily="'Georgia', serif" fontWeight="900" fontSize="21" fill="#000000" textAnchor="middle" fontStyle="italic">
              m
            </text>
            {/* Wordmark */}
            <text x="48" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5">
              MSC
            </text>
          </svg>
        );

      case 'CMA CGM':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Red and blue stylized dynamic shapes */}
            <path d="M 10 15 L 26 15 L 18 35 Z" fill="#002d62" />
            <path d="M 18 15 L 34 15 L 26 35 Z" fill="#e2001a" opacity="0.9" />
            {/* CMA CGM split color text */}
            <text x="42" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" letterSpacing="0.2">
              <tspan fill="#002d62">CMA </tspan>
              <tspan fill="#e2001a">CGM</tspan>
            </text>
          </svg>
        );

      case 'HAPAG-LOYD':
      case 'HAPAG-LLOYD':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Dark Navy Square with HL flag */}
            <rect x="10" y="10" width="30" height="30" rx="3" fill="#002f6c" />
            {/* White lines of HL logo */}
            <path d="M 17 15 L 21 15 L 21 35 L 17 35 Z M 21 23 L 30 23 L 30 27 L 21 27 Z" fill="#ffffff" />
            {/* Orange-Red triangle accent */}
            <polygon points="24,15 30,15 30,21" fill="#ff4500" />
            {/* Text */}
            <text x="48" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="0.2">
              Hapag-Lloyd
            </text>
          </svg>
        );

      case 'ONE':
      case 'OCEAN NETWORK EXPRESS':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Magenta badge with white bold text */}
            <rect x="10" y="10" width="140" height="30" rx="4" fill="#E1067A" />
            <text x="80" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="18" fill="#ffffff" textAnchor="middle" letterSpacing="1.5">
              ONE
            </text>
          </svg>
        );

      case 'EVERGREEN':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Green background square */}
            <rect x="10" y="10" width="30" height="30" rx="3" fill="#00843d" />
            {/* White compass star outline */}
            <circle cx="25" cy="25" r="7" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M 25,15 L 25,35 M 15,25 L 35,25" stroke="#ffffff" strokeWidth="1.2" />
            <path d="M 18,18 L 32,32 M 18,32 L 32,18" stroke="#ffffff" strokeWidth="0.8" />
            {/* Text */}
            <text x="48" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="#00843d" letterSpacing="0.5">
              EVERGREEN
            </text>
          </svg>
        );

      case 'COSCO':
      case 'COSCO SHIPPING':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Intersecting blue and red globe loops */}
            <circle cx="20" cy="25" r="9" fill="none" stroke="#0033a0" strokeWidth="2" />
            <circle cx="27" cy="25" r="9" fill="none" stroke="#ee1c25" strokeWidth="2" />
            {/* Text */}
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="#0033a0">
              COSCO
              <tspan fill="#ee1c25" fontSize="9" fontWeight="700"> SHIPPING</tspan>
            </text>
          </svg>
        );

      case 'YANG MING':
      case 'YANGMING':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Red circle with Y logo */}
            <circle cx="22" cy="25" r="12" fill="#e2001a" />
            <path d="M 16,18 L 22,25 L 28,18 M 22,25 L 22,33" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            {/* Text */}
            <text x="42" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="0.2">
              YANG MING
            </text>
          </svg>
        );

      case 'HMM':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Navy blue block with white HMM and red wave */}
            <rect x="10" y="10" width="40" height="30" rx="3" fill="#0c2340" />
            <text x="30" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="13" fill="#ffffff" textAnchor="middle">
              HMM
            </text>
            <path d="M 16,28 Q 30,32 44,28" stroke="#da291c" strokeWidth="1.5" fill="none" />
            {/* Text */}
            <text x="58" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" fill="#0c2340">
              HMM
            </text>
          </svg>
        );

      case 'ZIM':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Bold ZIM text with small gold star */}
            <text x="10" y="33" fontFamily="var(--font-sans)" fontWeight="900" fontSize="24" fill="#002d72" letterSpacing="0.5">
              ZIM
            </text>
            {/* Small Gold Star above the ZIM word */}
            <polygon points="12,12 14,15 18,15 15,18 17,21 12,19 7,21 9,18 6,15 10,15" fill="#ffd700" />
          </svg>
        );

      case 'OOCL':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Stylized Red flower shape */}
            <circle cx="22" cy="25" r="12" fill="#da291c" />
            <circle cx="22" cy="25" r="6" fill="#ffffff" />
            <path d="M 22,15 L 22,35 M 12,25 L 32,25" stroke="#da291c" strokeWidth="1.5" />
            {/* Text */}
            <text x="42" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5">
              OOCL
            </text>
          </svg>
        );

      case 'PIL':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            {/* Red Circle with PIL text inside */}
            <circle cx="22" cy="25" r="12" fill="#d22630" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">
              PIL
            </text>
            {/* Main Wordmark */}
            <text x="42" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="18" fill="#d22630" letterSpacing="0.5">
              PIL
            </text>
          </svg>
        );

      // =============================================
      // WAREHOUSE / LOGISTICS CLIENTS
      // =============================================

      case 'SAFEXPRESS':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#e31937" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="14" fill="#ffffff" textAnchor="middle">S</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor">Safexpress</text>
          </svg>
        );

      case 'DELHIVERY':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="14" fill="#e42322" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="14" fill="#ffffff" textAnchor="middle">D</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor">Delhivery</text>
          </svg>
        );

      case 'BLUE DART':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <polygon points="8,25 22,14 36,25 22,36" fill="#003399" />
            <polygon points="14,25 22,18 30,25 22,32" fill="#ffffff" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="#003399">Blue Dart</text>
          </svg>
        );

      case 'DHL':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="5" y="14" width="50" height="22" rx="3" fill="#FFCC00" />
            <text x="30" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="16" fill="#CC0000" textAnchor="middle">DHL</text>
            <text x="62" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="9" fill="currentColor">Express</text>
          </svg>
        );

      case 'FEDEX':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <text x="10" y="33" fontFamily="var(--font-sans)" fontWeight="900" fontSize="22" letterSpacing="-0.5">
              <tspan fill="#4D148C">Fed</tspan><tspan fill="#FF6600">Ex</tspan>
            </text>
          </svg>
        );

      case 'GATI':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#004B87" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="11" fill="#ffffff" textAnchor="middle">G</text>
            <text x="44" y="31" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" fill="#004B87">GATI</text>
          </svg>
        );

      case 'ALLCARGO':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="10" height="22" rx="2" fill="#0073CE" />
            <rect x="20" y="14" width="10" height="22" rx="2" fill="#E31937" />
            <text x="38" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="11" fill="currentColor">Allcargo</text>
          </svg>
        );

      case 'TVS SUPPLY CHAIN':
      case 'TVS':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#0033A0" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle">TVS</text>
            <text x="44" y="28" fontFamily="var(--font-sans)" fontWeight="700" fontSize="10" fill="currentColor">TVS Supply</text>
            <text x="44" y="38" fontFamily="var(--font-sans)" fontWeight="600" fontSize="8" fill="var(--color-muted)">Chain Solutions</text>
          </svg>
        );

      // =============================================
      // PACKAGING / TEXTILE / INDUSTRIAL CLIENTS
      // =============================================

      case 'WELSPUN':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#C41E3A" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">W</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor">Welspun</text>
          </svg>
        );

      case 'ARVIND':
      case 'ARVIND LTD':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#1a1a2e" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">A</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="13" fill="currentColor">Arvind</text>
          </svg>
        );

      case 'VARDHMAN':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#006B3F" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">V</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="11" fill="currentColor">Vardhman</text>
          </svg>
        );

      case 'RAYMOND':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#1B1B1B" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#D4AF37" textAnchor="middle">R</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor">Raymond</text>
          </svg>
        );

      case 'ONGC':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#0066B3" />
            <circle cx="22" cy="25" r="6" fill="#FF6600" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="#0066B3">ONGC</text>
          </svg>
        );

      case 'ESSAR':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#003366" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">E</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="#003366">Essar</text>
          </svg>
        );

      case 'RELIANCE':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#0033A0" />
            <text x="22" y="30" fontFamily="'Georgia', serif" fontWeight="700" fontSize="13" fill="#ffffff" textAnchor="middle">R</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor">Reliance</text>
          </svg>
        );

      case 'ADANI':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#003D6B" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">A</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="#003D6B">Adani</text>
          </svg>
        );

      case 'L&T':
      case 'LARSEN & TOUBRO':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#0052A2" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle">L&T</text>
            <text x="44" y="28" fontFamily="var(--font-sans)" fontWeight="700" fontSize="9" fill="currentColor">Larsen &</text>
            <text x="44" y="38" fontFamily="var(--font-sans)" fontWeight="700" fontSize="9" fill="currentColor">Toubro</text>
          </svg>
        );

      case 'TATA':
      case 'TATA GROUP':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#0033A0" />
            <text x="22" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">TATA</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="#0033A0">TATA</text>
          </svg>
        );

      case 'NAYARA':
      case 'NAYARA ENERGY':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#FF6600" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">N</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="11" fill="currentColor">Nayara</text>
          </svg>
        );

      case 'ULTRATECH':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="14" width="28" height="22" rx="3" fill="#C80815" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="9" fill="#ffffff" textAnchor="middle">U</text>
            <text x="44" y="28" fontFamily="var(--font-sans)" fontWeight="700" fontSize="10" fill="currentColor">UltraTech</text>
            <text x="44" y="38" fontFamily="var(--font-sans)" fontWeight="600" fontSize="8" fill="var(--color-muted)">Cement</text>
          </svg>
        );

      case 'EMIRATES':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#D71920" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="12" fill="#ffffff" textAnchor="middle">E</text>
            <text x="44" y="27" fontFamily="var(--font-sans)" fontWeight="800" fontSize="10" fill="#D71920">Emirates</text>
            <text x="44" y="37" fontFamily="var(--font-sans)" fontWeight="600" fontSize="8" fill="currentColor">Shipping Line</text>
          </svg>
        );

      case 'CORDELIA':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <path d="M 8,26 C 14,20 22,32 36,26 L 36,36 L 8,36 Z" fill="#0A3B75" />
            <circle cx="22" cy="18" r="4" fill="#E31E24" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="#0A3B75" letterSpacing="0.5">CORDELIA</text>
          </svg>
        );

      case 'WINWIN':
      case 'WINWIN MARITIME':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="14" fill="#005B94" />
            <text x="22" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle">W</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="#005B94">Winwin Maritime</text>
          </svg>
        );

      case 'KRIBHCO':
      case 'KRIBHCO INFRASTRUCTURE':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#008E44" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="8" fill="#ffffff" textAnchor="middle">KRIBH</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="#008E44">KRIBHCO</text>
          </svg>
        );

      case 'ASIATIC':
      case 'ASIATIC CONTAINER':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <polygon points="8,14 36,14 30,25 36,36 8,36" fill="#D22630" />
            <text x="22" y="29" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle">A</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="13" fill="currentColor">Asiatic</text>
          </svg>
        );

      case 'NEPAL SHIPPING':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#1B4F72" />
            <path d="M 22,16 L 22,28 M 16,22 L 28,22 M 19,28 Q 22,31 25,28" stroke="#ffffff" strokeWidth="2.5" fill="none" />
            <text x="44" y="28" fontFamily="var(--font-sans)" fontWeight="700" fontSize="10" fill="#1B4F72">Nepal</text>
            <text x="44" y="38" fontFamily="var(--font-sans)" fontWeight="600" fontSize="8" fill="var(--color-muted)">Shipping Lines</text>
          </svg>
        );

      case 'INDUS CONTAINER':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#002D62" />
            <path d="M 12,28 C 18,22 20,32 26,26" stroke="#ffffff" strokeWidth="2" fill="none" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="#002D62">Indus Lines</text>
          </svg>
        );

      case 'MSA':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#2E4053" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="11" fill="#ffffff" textAnchor="middle">MSA</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="13" fill="currentColor">MSA Shipping</text>
          </svg>
        );

      case 'VRL LOGISTICS':
      case 'VRL':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#FFCC00" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="14" fill="#D22630" textAnchor="middle">VRL</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="#D22630">VRL Logistics</text>
          </svg>
        );

      case 'MAHINDRA LOGISTICS':
      case 'MAHINDRA':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <polygon points="8,34 16,14 24,34 20,34 16,24 12,34" fill="#E31937" />
            <polygon points="20,14 28,34 32,34 24,14" fill="#E31937" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="12" fill="#E31937">Mahindra</text>
          </svg>
        );

      case 'LALJI MULJI':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#D35400" />
            <text x="22" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="12" fill="#ffffff" textAnchor="middle">LM</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="#D35400">Lalji Mulji</text>
          </svg>
        );

      case 'DTDC':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#0F2C59" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle">DTDC</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="#0F2C59">DTDC</text>
          </svg>
        );

      case 'FLIPKART':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="6" fill="#2874F0" />
            <rect x="12" y="16" width="20" height="20" rx="3" fill="#FFE500" />
            <text x="22" y="30" fontFamily="var(--font-sans)" fontWeight="900" fontSize="13" fill="#2874F0" textAnchor="middle">f</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="13" fill="#2874F0">Flipkart</text>
          </svg>
        );

      case 'AMAZON':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <text x="10" y="27" fontFamily="var(--font-sans)" fontWeight="900" fontSize="16" fill="currentColor">amazon</text>
            <path d="M 12,32 Q 35,40 55,32" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <polygon points="53,30 58,32 55,36" fill="#FF9900" />
          </svg>
        );

      case 'FILATEX':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#005B94" />
            <path d="M 14,18 L 26,18 M 14,24 L 22,24 M 14,18 L 14,32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="#005B94">Filatex</text>
          </svg>
        );

      case 'SUMUL':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <circle cx="22" cy="25" r="13" fill="#E31E24" />
            <path d="M 17,21 A 5,5 0 0 1 27,21 A 5,5 0 0 1 17,31 Z" fill="#ffffff" />
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="#E31E24">SUMUL</text>
          </svg>
        );

      case 'EURO FOOD CLUB':
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="8" y="12" width="28" height="28" rx="4" fill="#006400" />
            <text x="22" y="31" fontFamily="var(--font-sans)" fontWeight="900" fontSize="8" fill="#FFD700" textAnchor="middle">EURO</text>
            <text x="44" y="30" fontFamily="var(--font-sans)" fontWeight="800" fontSize="11" fill="#006400">Euro Food Club</text>
          </svg>
        );

      // Default fallback if brand not found - renders stylized typography badge
      default:
        return (
          <svg viewBox="0 0 160 50" height="100%" width="100%">
            <rect x="5" y="10" width="150" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="80" y="29" fontFamily="var(--font-sans)" fontWeight="700" fontSize="12" fill="currentColor" textAnchor="middle">
              {name}
            </text>
          </svg>
        );
    }
  };

  return (
    <div 
      className={`client-logo-wrapper ${className}`} 
      style={{ 
        height: `${height}px`, 
        width: `${width}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {renderSvg()}
    </div>
  );
}
