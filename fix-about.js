const fs = require('fs');

let file = fs.readFileSync('app/about/page.tsx', 'utf8');

file = file.replace(/import \{.*\} from 'lucide-react';/, "import { Sparkles, Compass, History, CheckCircle2, Target, Users, Zap, BookOpen, Heart, MessageSquare, ChevronDown, ChevronUp, Award, Globe, Shield, Gamepad2, Clapperboard, Flame } from 'lucide-react';");

file = file.replace(/<div className="theme-overview-badge onepiece-badge">.*?<\/div>/, '<div className="theme-overview-badge onepiece-badge"><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>');
file = file.replace(/<div className="theme-overview-badge lol-badge">.*?<\/div>/, '<div className="theme-overview-badge lol-badge"><Gamepad2 size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />게임</div>');
file = file.replace(/<div className="theme-overview-badge fma-badge">.*?<\/div>/, '<div className="theme-overview-badge fma-badge"><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>');
file = file.replace(/<div className="theme-overview-badge pokemon-badge"(.*?)>.*?<\/div>/, '<div className="theme-overview-badge pokemon-badge"$1><Gamepad2 size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />게임</div>');
file = file.replace(/<div className="theme-overview-badge diablo2-badge"(.*?)>.*?<\/div>/, '<div className="theme-overview-badge diablo2-badge"$1><Gamepad2 size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />게임</div>');
file = file.replace(/<div className="theme-overview-badge sololeveling-badge"(.*?)>.*?<\/div>/, '<div className="theme-overview-badge sololeveling-badge"$1><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />웹툰/애니</div>');
file = file.replace(/<div className="theme-overview-badge bleach-badge"(.*?)>.*?<\/div>/, '<div className="theme-overview-badge bleach-badge"$1><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>');
file = file.replace(/<div className="theme-overview-badge lotr-badge"(.*?)>.*?<\/div>/, '<div className="theme-overview-badge lotr-badge"$1><Clapperboard size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />영화</div>');
file = file.replace(/<div className="theme-overview-badge"(.*?)#ef4444.*?>.*?<\/div>.*?MCU/s, '<div className="theme-overview-badge"$1#ef4444, #991b1b)\', color: \'white\' }}><Clapperboard size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />영화</div>\n              <h3>🦸 마블 시네마틱 유니버스 (MCU)');
file = file.replace(/<div className="theme-overview-badge"(.*?)#6b7280.*?>.*?<\/div>.*?진격의/s, '<div className="theme-overview-badge"$1#6b7280, #111827)\', color: \'white\' }}><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>\n              <h3>🪽 진격의');
file = file.replace(/<div className="theme-overview-badge"(.*?)#ef4444.*?>.*?<\/div>.*?슬램덩크/s, '<div className="theme-overview-badge"$1#ef4444, #b91c1c)\', color: \'white\' }}><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>\n              <h3>🏀 슬램덩크');
file = file.replace(/<div className="theme-overview-badge"(.*?)#22c55e.*?>.*?<\/div>.*?헌터x헌터/s, '<div className="theme-overview-badge"$1#22c55e, #166534)\', color: \'white\' }}><BookOpen size={12} style={{marginRight: "4px", marginBottom: "-1px"}} />만화/애니</div>\n              <h3>🎣 헌터x헌터');

fs.writeFileSync('app/about/page.tsx', file);
console.log('done!');
