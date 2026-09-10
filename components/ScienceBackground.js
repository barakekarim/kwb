/**
 * Hand-drawn science doodles scattered around the hero: musical notation,
 * a Fourier transform, the Schrodinger equation, E = mc^2, a benzene ring,
 * an eye with refracting rays, Snell's law, a brain, waveforms and node graphs.
 * Pure SVG, no JS. The viewBox is sliced so the centre stays clear of clutter.
 *
 * Positioning lives on the outer <g transform="translate(...)"> (an attribute);
 * the drift animation lives on an inner <g class="drift"> so the CSS transform
 * never clobbers the placement.
 */
export default function ScienceBackground() {
  return (
    <div className="scibg" aria-hidden="true">
      <svg
        className="scibg__svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="scibg__ink">
          {/* musical staff + treble clef + notes — top left */}
          <g transform="translate(70 64)">
            <g className="drift drift--a">
              <path d="M0 0H300M0 12H300M0 24H300M0 36H300M0 48H300" />
              <path d="M22 70c-16-8-16-30-2-38 16-9 24 11 12 20-9 7-18 1-15-8 2-5 7-8 12-7" />
              <ellipse cx="78" cy="40" rx="6" ry="4.5" />
              <path d="M84 40V8" />
              <ellipse cx="122" cy="26" rx="6" ry="4.5" />
              <path d="M128 26V-6" />
              <path d="M84 8 128 -2" />
              <ellipse cx="176" cy="44" rx="6" ry="4.5" />
              <path d="M182 44V14" />
              <ellipse cx="224" cy="30" rx="6" ry="4.5" />
              <path d="M230 30V0" />
              <ellipse cx="272" cy="18" rx="6" ry="4.5" />
              <path d="M278 18V-12" />
            </g>
          </g>

          {/* Fourier transform — upper centre-left */}
          <text className="scibg__eq" x="430" y="118" fontSize="30">
            f(&#969;) ={" "}
            <tspan fontSize="40" dy="6">
              &#8747;
            </tspan>
            <tspan dy="-6"> x(t) e</tspan>
            <tspan baselineShift="super" fontSize="20">
              &#8722;i&#969;t
            </tspan>
            <tspan> dt</tspan>
          </text>

          {/* Schrodinger equation — left middle */}
          <text className="scibg__eq" x="60" y="430" fontSize="30">
            i&#8463; &#8706;&#968;/&#8706;t = &#292;&#968;
          </text>

          {/* E = mc^2 — right */}
          <text className="scibg__eq" x="1360" y="286" fontSize="34">
            E = mc<tspan baselineShift="super" fontSize="20">2</tspan>
          </text>

          {/* benzene ring with substituents — top right */}
          <g transform="translate(1360 70)">
            <g className="drift drift--b">
              <path d="M44 0 84 24 84 70 44 94 4 70 4 24Z" />
              <circle cx="44" cy="47" r="24" />
              <path d="M84 24 108 12" />
              <text className="scibg__eq" x="112" y="14" fontSize="22">
                N
              </text>
              <path d="M84 70 108 82" />
              <text className="scibg__eq" x="112" y="90" fontSize="22">
                O
              </text>
              <path d="M4 24 -20 12" />
              <text className="scibg__eq" x="-58" y="14" fontSize="22">
                HO
              </text>
              <path d="M44 0V-20" />
              <text className="scibg__eq" x="38" y="-26" fontSize="22">
                H
              </text>
              <path d="M44 94V114" />
              <text className="scibg__eq" x="38" y="132" fontSize="22">
                O
              </text>
            </g>
          </g>

          {/* node graph — upper right */}
          <g transform="translate(1120 150)">
            <g className="drift drift--c">
              <path d="M0 0 60-16M0 0 46 46M0 0-22 40M60-16 46 46" />
              <circle cx="0" cy="0" r="5" />
              <circle cx="60" cy="-16" r="5" />
              <circle cx="46" cy="46" r="5" />
              <circle cx="-22" cy="40" r="5" />
            </g>
          </g>

          {/* eye with refracting rays + lens — right middle */}
          <g transform="translate(1430 380)">
            <g className="drift drift--a">
              <path d="M0 30Q45-12 96 30Q45 72 0 30Z" />
              <circle cx="48" cy="30" r="15" />
              <circle cx="48" cy="30" r="5" />
              <path d="M-64 2 24 26M-64 30 22 30M-64 58 24 34" />
              <path d="M60 26 128 6M62 34 128 54M60 30 130 30" />
              <path d="M56 8Q68 30 56 52Q44 30 56 8Z" />
            </g>
          </g>

          {/* Snell's law — right, lower */}
          <text className="scibg__eq" x="1240" y="612" fontSize="26">
            n<tspan baselineShift="sub" fontSize="18">1</tspan> sin
            &#952;<tspan baselineShift="sub" fontSize="18">1</tspan> = n
            <tspan baselineShift="sub" fontSize="18">2</tspan> sin &#952;
            <tspan baselineShift="sub" fontSize="18">2</tspan>
          </text>

          {/* waveform — mid left */}
          <g transform="translate(48 520)">
            <g className="drift drift--b">
              <polyline points="0,20 7,6 14,32 21,0 28,36 35,10 42,26 49,3 56,40 63,9 70,28 77,5 84,33 91,14 98,24 105,1 112,37 119,11 126,30 133,7 140,27 147,3 154,35 161,16 168,22 175,9 182,29 189,6 196,20" />
            </g>
          </g>

          {/* A = integral |x(t)|^2 dt — bottom left */}
          <text className="scibg__eq" x="60" y="828" fontSize="28">
            A = <tspan fontSize="38" dy="6">&#8747;</tspan>
            <tspan dy="-6"> |x(t)|</tspan>
            <tspan baselineShift="super" fontSize="18">2</tspan>
            <tspan> dt</tspan>
          </text>

          {/* second waveform — lower left */}
          <g transform="translate(360 760) scale(1.15)">
            <g className="drift drift--c">
              <polyline points="0,16 6,4 12,24 18,2 24,28 30,8 36,20 42,3 48,30 54,7 60,22 66,5 72,26 78,12 84,18 90,2 96,28 102,9 108,23" />
            </g>
          </g>

          {/* node graph — bottom centre */}
          <g transform="translate(430 800) scale(1.2)">
            <g className="drift drift--a">
              <path d="M0 0 70-8M0 0 40 40M70-8 92 34M40 40 92 34" />
              <circle cx="0" cy="0" r="5" />
              <circle cx="70" cy="-8" r="5" />
              <circle cx="40" cy="40" r="5" />
              <circle cx="92" cy="34" r="5" />
            </g>
          </g>

          {/* brain — bottom right */}
          <g transform="translate(1380 780)">
            <g className="drift drift--b">
              <path d="M12 42C0 22 22 4 40 12 46-2 70-2 76 14 98 8 108 32 92 44 104 60 84 80 64 70 56 86 30 86 24 68 4 72-6 50 12 42Z" />
              <path d="M28 32c10-4 12 10 22 6M40 56c10-6 14 6 26 0M52 20c4 8-2 16 4 24" />
            </g>
          </g>

          {/* plasticity note — bottom right, under the brain */}
          <text
            className="scibg__eq scibg__eq--accent"
            x="1150"
            y="864"
            fontSize="24"
          >
            Plasticity = Change + Experience
          </text>
        </g>
      </svg>
    </div>
  );
}
