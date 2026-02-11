// ===== РАСШИРЕННАЯ ГЕНЕРАЦИЯ ЗВУКА =====
function createAdvancedOscillator(audioContext, frequency, type, time) {
    const now = audioContext.currentTime + time;
    
    switch(type) {
        // Базовые волны (оригинальные)
        case 'sine':
        case 'square':
        case 'sawtooth':
        case 'triangle':
            const basicOsc = audioContext.createOscillator();
            basicOsc.type = type;
            basicOsc.frequency.setValueAtTime(frequency, now);
            return { oscillator: basicOsc, gainNode: null, extras: [] };
            
        // Синт-пад (мягкий с гармониками)
        case 'synth-pad':
            return createSynthPad(audioContext, frequency, now);
            
        // Синт-соло (яркий с детюном)
        case 'synth-lead':
            return createSynthLead(audioContext, frequency, now);
            
        // Синт-бас (глубокий с суб-гармоникой)
        case 'synth-bass':
            return createSynthBass(audioContext, frequency, now);
            
        // FM колокольчик
        case 'fm-bell':
            return createFMBell(audioContext, frequency, now);
            
        // Пианино
        case 'piano':
            return createPiano(audioContext, frequency, now);
            
        // Орган
        case 'organ':
            return createOrgan(audioContext, frequency, now);
            
        // Гитара
        case 'guitar':
            return createGuitar(audioContext, frequency, now);
            
        // Струнные
        case 'strings':
            return createStrings(audioContext, frequency, now);
            
        // Духовые
        case 'brass':
            return createBrass(audioContext, frequency, now);
            
        // Флейта
        case 'flute':
            return createFlute(audioContext, frequency, now);
            
        // Дисторшн
        case 'distortion':
            return createDistortion(audioContext, frequency, now);
            
        // Шум (для перкуссии)
        case 'noise':
            return createNoise(audioContext, frequency, now);
            
        // Хор
        case 'choir':
            return createChoir(audioContext, frequency, now);
            
        // Винтажный
        case 'vintage':
            return createVintage(audioContext, frequency, now);
            
        default:
            const defaultOsc = audioContext.createOscillator();
            defaultOsc.type = 'triangle';
            defaultOsc.frequency.setValueAtTime(frequency, now);
            return { oscillator: defaultOsc, gainNode: null, extras: [] };
    }
}

// ===== ФУНКЦИИ ДЛЯ СОЗДАНИЯ РАЗЛИЧНЫХ ТИПОВ ЗВУКОВ =====

function createSynthPad(ctx, freq, time) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    osc3.type = 'sine';
    
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 2, time);
    osc3.frequency.setValueAtTime(freq * 3, time);
    
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    const gain3 = ctx.createGain();
    
    gain1.gain.setValueAtTime(0.5, time);
    gain2.gain.setValueAtTime(0.2, time);
    gain3.gain.setValueAtTime(0.1, time);
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    osc3.connect(gain3);
    
    const merger = ctx.createGain();
    gain1.connect(merger);
    gain2.connect(merger);
    gain3.connect(merger);
    
    return { oscillator: osc1, gainNode: merger, extras: [osc2, osc3] };
}

function createSynthLead(ctx, freq, time) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq + 5, time);
    
    const merger = ctx.createGain();
    osc1.connect(merger);
    osc2.connect(merger);
    
    return { oscillator: osc1, gainNode: merger, extras: [osc2] };
}

function createSynthBass(ctx, freq, time) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    
    osc1.type = 'sawtooth';
    osc2.type = 'sine';
    
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq / 2, time);
    
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    
    gain1.gain.setValueAtTime(0.6, time);
    gain2.gain.setValueAtTime(0.4, time);
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    
    const merger = ctx.createGain();
    gain1.connect(merger);
    gain2.connect(merger);
    
    return { oscillator: osc1, gainNode: merger, extras: [osc2] };
}

function createFMBell(ctx, freq, time) {
    const carrier = ctx.createOscillator();
    const modulator = ctx.createOscillator();
    const modulatorGain = ctx.createGain();
    
    carrier.type = 'sine';
    modulator.type = 'sine';
    
    carrier.frequency.setValueAtTime(freq, time);
    modulator.frequency.setValueAtTime(freq * 3.5, time);
    modulatorGain.gain.setValueAtTime(200, time);
    
    modulator.connect(modulatorGain);
    modulatorGain.connect(carrier.frequency);
    
    return { oscillator: carrier, gainNode: null, extras: [modulator] };
}

function createPiano(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(1, time);
    
    osc.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

function createOrgan(ctx, freq, time) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    osc3.type = 'sine';
    
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 2, time);
    osc3.frequency.setValueAtTime(freq * 4, time);
    
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    const gain3 = ctx.createGain();
    
    gain1.gain.setValueAtTime(0.4, time);
    gain2.gain.setValueAtTime(0.3, time);
    gain3.gain.setValueAtTime(0.2, time);
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    osc3.connect(gain3);
    
    const merger = ctx.createGain();
    gain1.connect(merger);
    gain2.connect(merger);
    gain3.connect(merger);
    
    return { oscillator: osc1, gainNode: merger, extras: [osc2, osc3] };
}

function createGuitar(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, time);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.8, time);
    
    osc.connect(filter);
    filter.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

function createStrings(ctx, freq, time) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc3.type = 'sawtooth';
    
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq + 3, time);
    osc3.frequency.setValueAtTime(freq - 3, time);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    
    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    
    return { oscillator: osc1, gainNode: gain, extras: [osc2, osc3] };
}

function createBrass(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1500, time);
    filter.Q.setValueAtTime(5, time);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    
    osc.connect(filter);
    filter.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

function createFlute(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    const gain = ctx.createGain();
    
    osc.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

function createDistortion(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);
    
    const distortion = ctx.createWaveShaper();
    distortion.curve = makeDistortionCurve(400);
    
    const gain = ctx.createGain();
    
    osc.connect(distortion);
    distortion.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

function makeDistortionCurve(amount) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    
    for (let i = 0; i < samples; i++) {
        const x = (i * 2) / samples - 1;
        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
}

function createNoise(ctx, freq, time) {
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    for (let i = 0; i < output.length; i++) {
        output[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;
    noise.loop = false;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, time);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, time);
    
    noise.connect(filter);
    filter.connect(gain);
    
    return { oscillator: noise, gainNode: gain, extras: [] };
}

function createChoir(ctx, freq, time) {
    const oscillators = [];
    const merger = ctx.createGain();
    
    for (let i = 0; i < 5; i++) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq + (i - 2) * 2, time);
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.15, time);
        
        osc.connect(gain);
        gain.connect(merger);
        
        oscillators.push(osc);
    }
    
    return { oscillator: oscillators[0], gainNode: merger, extras: oscillators.slice(1) };
}

function createVintage(ctx, freq, time) {
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.Q.setValueAtTime(2, time);
    
    const gain = ctx.createGain();
    
    osc.connect(filter);
    filter.connect(gain);
    
    return { oscillator: osc, gainNode: gain, extras: [] };
}

// ===== MIDI ПАРСЕР (УЛУЧШЕННЫЙ) =====
class MIDIParser {
    constructor(arrayBuffer) {
        this.data = new DataView(arrayBuffer);
        this.pos = 0;
    }

    readString(length) {
        let str = '';
        for (let i = 0; i < length; i++) {
            str += String.fromCharCode(this.data.getUint8(this.pos++));
        }
        return str;
    }

    readUInt32() {
        const val = this.data.getUint32(this.pos);
        this.pos += 4;
        return val;
    }

    readUInt24() {
        const val = (this.data.getUint8(this.pos) << 16) |
                   (this.data.getUint8(this.pos + 1) << 8) |
                    this.data.getUint8(this.pos + 2);
        this.pos += 3;
        return val;
    }

    readUInt16() {
        const val = this.data.getUint16(this.pos);
        this.pos += 2;
        return val;
    }

    readUInt8() {
        return this.data.getUint8(this.pos++);
    }

    readVarLen() {
        let value = 0;
        let byte;
        do {
            byte = this.readUInt8();
            value = (value << 7) | (byte & 0x7f);
        } while (byte & 0x80);
        return value;
    }

    parse() {
        const header = this.readString(4);
        if (header !== 'MThd') {
            throw new Error('Неверный MIDI файл');
        }

        const headerLength = this.readUInt32();
        const format = this.readUInt16();
        const trackCount = this.readUInt16();
        const timeDivision = this.readUInt16();

        let ticksPerBeat = timeDivision;
        let isSMPTE = false;
        let framesPerSecond = 0;
        let ticksPerFrame = 0;

        if (timeDivision & 0x8000) {
            isSMPTE = true;
            framesPerSecond = -(timeDivision >> 8);
            ticksPerFrame = timeDivision & 0xFF;
            ticksPerBeat = framesPerSecond * ticksPerFrame;
        }

        const tracks = [];
        const tempoMap = [];

        for (let i = 0; i < trackCount; i++) {
            const track = this.parseTrack(tempoMap);
            if (track.events.length > 0) {
                tracks.push(track);
            }
        }

        return { 
            format, 
            trackCount, 
            timeDivision,
            ticksPerBeat,
            isSMPTE,
            framesPerSecond,
            ticksPerFrame,
            tempoMap,
            tracks 
        };
    }

    parseTrack(tempoMap) {
        const header = this.readString(4);
        if (header !== 'MTrk') {
            throw new Error('Неверный трек');
        }

        const trackLength = this.readUInt32();
        const trackEnd = this.pos + trackLength;
        const events = [];
        let runningStatus = 0;
        let absoluteTime = 0;

        while (this.pos < trackEnd) {
            const deltaTime = this.readVarLen();
            absoluteTime += deltaTime;

            let status = this.data.getUint8(this.pos);

            if (status < 0x80) {
                status = runningStatus;
            } else {
                this.pos++;
                if (status >= 0x80 && status < 0xF0) {
                    runningStatus = status;
                }
            }

            const eventType = status >> 4;
            const channel = status & 0x0F;

            if (eventType === 0x9) {
                const note = this.readUInt8();
                const velocity = this.readUInt8();
                if (velocity > 0) {
                    events.push({ type: 'noteOn', time: absoluteTime, note, velocity, channel });
                } else {
                    events.push({ type: 'noteOff', time: absoluteTime, note, channel });
                }
            }
            else if (eventType === 0x8) {
                const note = this.readUInt8();
                const velocity = this.readUInt8();
                events.push({ type: 'noteOff', time: absoluteTime, note, channel });
            }
            else if (eventType === 0xE) {
                const lsb = this.readUInt8();
                const msb = this.readUInt8();
                const value = (msb << 7) | lsb;
                events.push({ type: 'pitchBend', time: absoluteTime, value, channel });
            }
            else if (eventType === 0xC) {
                const program = this.readUInt8();
                events.push({ type: 'programChange', time: absoluteTime, program, channel });
            }
            else if (eventType === 0xB) {
                const controller = this.readUInt8();
                const value = this.readUInt8();
                events.push({ type: 'controlChange', time: absoluteTime, controller, value, channel });
            }
            else if (eventType === 0xD) {
                const pressure = this.readUInt8();
                events.push({ type: 'channelPressure', time: absoluteTime, pressure, channel });
            }
            else if (eventType === 0xA) {
                const note = this.readUInt8();
                const pressure = this.readUInt8();
                events.push({ type: 'polyPressure', time: absoluteTime, note, pressure, channel });
            }
            else if (status === 0xFF || status === 0xF0 || status === 0xF7) {
                if (status === 0xFF) {
                    const metaType = this.readUInt8();
                    const length = this.readVarLen();
                    
                    if (metaType === 0x51 && length === 3) {
                        const microsecondsPerBeat = this.readUInt24();
                        const bpm = 60000000 / microsecondsPerBeat;
                        tempoMap.push({
                            time: absoluteTime,
                            microsecondsPerBeat,
                            bpm
                        });
                        events.push({ 
                            type: 'tempo', 
                            time: absoluteTime, 
                            microsecondsPerBeat,
                            bpm
                        });
                    } else {
                        this.pos += length;
                    }
                } else {
                    const length = this.readVarLen();
                    this.pos += length;
                }
            }
        }

        return { events };
    }
}

// ===== MIDI WRITER =====
class MIDIWriter {
    constructor() {
        this.data = [];
    }

    writeString(str) {
        for (let i = 0; i < str.length; i++) {
            this.data.push(str.charCodeAt(i));
        }
    }

    writeUInt32(value) {
        this.data.push((value >> 24) & 0xFF);
        this.data.push((value >> 16) & 0xFF);
        this.data.push((value >> 8) & 0xFF);
        this.data.push(value & 0xFF);
    }

    writeUInt16(value) {
        this.data.push((value >> 8) & 0xFF);
        this.data.push(value & 0xFF);
    }

    writeUInt8(value) {
        this.data.push(value & 0xFF);
    }

    writeVarLen(value) {
        const bytes = [];
        bytes.push(value & 0x7F);
        value >>= 7;
        while (value > 0) {
            bytes.push((value & 0x7F) | 0x80);
            value >>= 7;
        }
        for (let i = bytes.length - 1; i >= 0; i--) {
            this.data.push(bytes[i]);
        }
    }

    createMIDI(jsonData) {
        this.data = [];
        
        this.writeString('MThd');
        this.writeUInt32(6);
        this.writeUInt16(1);
        this.writeUInt16(jsonData.tracks.length);
        this.writeUInt16(480);

        jsonData.tracks.forEach(track => {
            this.writeTrack(track);
        });

        return new Uint8Array(this.data);
    }

    writeTrack(track) {
        const tempWriter = new MIDIWriter();
        
        const notes = [...track.notes].sort((a, b) => a.time - b.time);
        
        const events = [];
        notes.forEach(note => {
            const startTime = Math.round(note.time * 480);
            const endTime = Math.round((note.time + note.duration) * 480);
            
            events.push({
                time: startTime,
                type: 'noteOn',
                note: note.note,
                velocity: note.velocity || 100
            });
            
            events.push({
                time: endTime,
                type: 'noteOff',
                note: note.note
            });
        });
        
        events.sort((a, b) => a.time - b.time);
        
        let currentTime = 0;
        events.forEach(event => {
            const deltaTime = event.time - currentTime;
            tempWriter.writeVarLen(deltaTime);
            
            if (event.type === 'noteOn') {
                tempWriter.writeUInt8(0x90);
                tempWriter.writeUInt8(event.note);
                tempWriter.writeUInt8(event.velocity);
            } else {
                tempWriter.writeUInt8(0x80);
                tempWriter.writeUInt8(event.note);
                tempWriter.writeUInt8(0);
            }
            
            currentTime = event.time;
        });
        
        tempWriter.writeVarLen(0);
        tempWriter.writeUInt8(0xFF);
        tempWriter.writeUInt8(0x2F);
        tempWriter.writeUInt8(0x00);
        
        this.writeString('MTrk');
        this.writeUInt32(tempWriter.data.length);
        this.data.push(...tempWriter.data);
    }
}

// ===== VISUALIZER (ИСПРАВЛЕННЫЙ) =====
class Visualizer {
    constructor(canvas, debugEl) {
        this.canvas = canvas;
        this.debugEl = debugEl;
        this.mode = 'bars';
        this.activeNotes = new Map();
        this.bars = new Array(88).fill(0);
        this.smoothedBars = new Array(88).fill(0);
        this.noteCount = 0;
        this.isActive = false;
        this.animationFrameId = null;
        
        // Инициализация контекста
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        console.log('Visualizer initialized:', {
            canvas: this.canvas,
            width: this.width,
            height: this.height,
            ctx: this.ctx
        });
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.width = rect.width;
        this.height = rect.height;
        console.log('Canvas resized:', this.width, 'x', this.height);
    }

    setMode(mode) {
        this.mode = mode;
        console.log('Visualization mode set to:', mode);
    }

    addNote(note, velocity) {
        const index = note - 21;
        if (index >= 0 && index < 88) {
            this.activeNotes.set(note, { velocity, time: Date.now() });
            this.bars[index] = Math.min(1, velocity / 127);
            this.noteCount++;
            this.updateDebug();
            console.log('Note added:', note, 'velocity:', velocity, 'index:', index);
        }
    }

    removeNote(note) {
        if (this.activeNotes.delete(note)) {
            this.noteCount = Math.max(0, this.noteCount - 1);
            this.updateDebug();
            console.log('Note removed:', note);
        }
    }

    updateDebug() {
        if (this.debugEl) {
            this.debugEl.textContent = `Нот: ${this.noteCount}`;
        }
    }

    start() {
        if (this.isActive) {
            console.log('Visualizer already active');
            return;
        }
        this.isActive = true;
        console.log('Visualizer started');
        this.animate();
    }

    stop() {
        console.log('Visualizer stopped');
        this.isActive = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.activeNotes.clear();
        this.bars.fill(0);
        this.smoothedBars.fill(0);
        this.noteCount = 0;
        this.updateDebug();
        this.clear();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    animate() {
        if (!this.isActive) return;

        // Обновление значений столбцов с затуханием
        for (let i = 0; i < this.bars.length; i++) {
            const target = this.bars[i];
            const current = this.smoothedBars[i];
            const decay = 0.9;
            
            if (target > current) {
                this.smoothedBars[i] = target;
            } else {
                this.smoothedBars[i] = current * decay;
            }
            
            if (this.smoothedBars[i] < 0.01) {
                this.bars[i] = 0;
                this.smoothedBars[i] = 0;
            }
        }

        this.draw();
        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    draw() {
        this.clear();
        
        switch(this.mode) {
            case 'bars':
                this.drawBars();
                break;
            case 'wave':
                this.drawWave();
                break;
            case 'circle':
                this.drawCircle();
                break;
        }
    }

    drawBars() {
        const barCount = 88;
        const barWidth = this.width / barCount;
        const maxHeight = this.height - 20;

        for (let i = 0; i < barCount; i++) {
            const height = this.smoothedBars[i] * maxHeight;
            if (height < 1) continue;

            const x = i * barWidth;
            const y = this.height - height;
            
            const hue = (i / barCount) * 360;
            this.ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            this.ctx.fillRect(x, y, barWidth - 1, height);
        }
    }

    drawWave() {
        const points = [];
        const step = this.width / 87;
        
        for (let i = 0; i < 88; i++) {
            const x = i * step;
            const y = this.height / 2 - (this.smoothedBars[i] * (this.height / 2 - 10));
            points.push({ x, y });
        }

        if (points.length < 2) return;

        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            this.ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        this.ctx.quadraticCurveTo(
            points[points.length - 1].x,
            points[points.length - 1].y,
            points[points.length - 1].x,
            points[points.length - 1].y
        );

        this.ctx.strokeStyle = '#667eea';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.lineTo(this.width, this.height);
        this.ctx.lineTo(0, this.height);
        this.ctx.closePath();

        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.5)');
        gradient.addColorStop(1, 'rgba(118, 75, 162, 0.1)');
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    drawCircle() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const maxRadius = Math.min(centerX, centerY) - 20;
        const barCount = 88;

        for (let i = 0; i < barCount; i++) {
            const angle = (i / barCount) * Math.PI * 2 - Math.PI / 2;
            const length = this.smoothedBars[i] * maxRadius * 0.7;
            
            const startX = centerX + Math.cos(angle) * (maxRadius * 0.3);
            const startY = centerY + Math.sin(angle) * (maxRadius * 0.3);
            const endX = centerX + Math.cos(angle) * (maxRadius * 0.3 + length);
            const endY = centerY + Math.sin(angle) * (maxRadius * 0.3 + length);

            const hue = (i / barCount) * 360;
            this.ctx.strokeStyle = `hsl(${hue}, 70%, 60%)`;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
        }
    }
}

// ===== MIDI PLAYER =====
class MIDIPlayer {
    constructor(visualizer) {
        this.midiData = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.currentTime = 0;
        this.duration = 0;
        this.scheduledEvents = [];
        this.audioContext = null;
        this.volume = 30;
        this.tempo = 100;
        this.waveType = 'triangle';
        this.visualizer = visualizer;
        this.updateInterval = null;
        this.mediaRecorder = null;
        this.recordedChunks = [];
        this.isRecording = false;
        this.recordingDestination = null;
    }

    async init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
    }

    loadMIDI(arrayBuffer) {
        try {
            const parser = new MIDIParser(arrayBuffer);
            this.midiData = parser.parse();
            this.calculateDuration();
            return this.midiData;
        } catch (error) {
            throw new Error('Ошибка парсинга MIDI: ' + error.message);
        }
    }

    calculateDuration() {
        if (!this.midiData) return;

        let maxTime = 0;
        const ticksPerBeat = this.midiData.ticksPerBeat;
        
        let currentTempo = 500000;
        const tempoChanges = [];

        this.midiData.tracks.forEach(track => {
            track.events.forEach(event => {
                if (event.type === 'tempo') {
                    tempoChanges.push({
                        tick: event.time,
                        microsecondsPerBeat: event.microsecondsPerBeat
                    });
                }
            });
        });

        tempoChanges.sort((a, b) => a.tick - b.tick);

        this.midiData.tracks.forEach(track => {
            track.events.forEach(event => {
                const time = this.ticksToSeconds(event.time, ticksPerBeat, tempoChanges);
                if (time > maxTime) {
                    maxTime = time;
                }
            });
        });

        this.duration = maxTime;
    }

    ticksToSeconds(ticks, ticksPerBeat, tempoChanges) {
        let seconds = 0;
        let currentTick = 0;
        let currentTempo = 500000;

        for (let i = 0; i < tempoChanges.length; i++) {
            const change = tempoChanges[i];
            if (change.tick >= ticks) break;

            const deltaTicks = change.tick - currentTick;
            seconds += (deltaTicks / ticksPerBeat) * (currentTempo / 1000000);
            
            currentTick = change.tick;
            currentTempo = change.microsecondsPerBeat;
        }

        const deltaTicks = ticks - currentTick;
        seconds += (deltaTicks / ticksPerBeat) * (currentTempo / 1000000);

        return seconds;
    }

    async play(startTime = 0) {
        if (!this.midiData) return;

        await this.init();
        
        this.isPlaying = true;
        this.isPaused = false;
        this.currentTime = startTime;
        
        // КРИТИЧЕСКИ ВАЖНО: запускаем визуализацию
        console.log('Starting visualizer from play()');
        this.visualizer.start();

        this.scheduleNotes(startTime);
        this.startTimeUpdate();
    }

    scheduleNotes(startTime) {
        const ticksPerBeat = this.midiData.ticksPerBeat;
        const tempoChanges = [];

        this.midiData.tracks.forEach(track => {
            track.events.forEach(event => {
                if (event.type === 'tempo') {
                    tempoChanges.push({
                        tick: event.time,
                        microsecondsPerBeat: event.microsecondsPerBeat
                    });
                }
            });
        });

        tempoChanges.sort((a, b) => a.tick - b.tick);

        const noteMap = new Map();

        this.midiData.tracks.forEach(track => {
            track.events.forEach(event => {
                const eventTime = this.ticksToSeconds(event.time, ticksPerBeat, tempoChanges);
                const adjustedTime = eventTime / (this.tempo / 100);

                if (adjustedTime < startTime) return;

                if (event.type === 'noteOn') {
                    noteMap.set(event.note + '_' + event.channel, {
                        note: event.note,
                        velocity: event.velocity,
                        startTime: adjustedTime,
                        channel: event.channel
                    });
                } else if (event.type === 'noteOff') {
                    const noteOn = noteMap.get(event.note + '_' + event.channel);
                    if (noteOn) {
                        const duration = adjustedTime - noteOn.startTime;
                        const delay = (noteOn.startTime - startTime) * 1000;

                        const timeoutId = setTimeout(() => {
                            if (this.isPlaying) {
                                this.playNote(noteOn.note, noteOn.velocity, duration);
                            }
                        }, delay);

                        this.scheduledEvents.push(timeoutId);
                        noteMap.delete(event.note + '_' + event.channel);
                    }
                }
            });
        });
    }

    playNote(note, velocity, duration) {
        if (!this.audioContext) return;

        try {
            const time = this.audioContext.currentTime;
            const frequency = 440 * Math.pow(2, (note - 69) / 12);
            
            // КРИТИЧЕСКИ ВАЖНО: добавляем ноту в визуализатор
            console.log('Adding note to visualizer:', note, velocity);
            this.visualizer.addNote(note, velocity);
            
            const soundResult = createAdvancedOscillator(
                this.audioContext, 
                frequency, 
                this.waveType, 
                0
            );
            
            const oscillator = soundResult.oscillator;
            const customGain = soundResult.gainNode;
            const extras = soundResult.extras || [];
            
            const masterGain = this.audioContext.createGain();
            const volumeMultiplier = (velocity / 127) * (this.volume / 100);
            
            masterGain.gain.setValueAtTime(volumeMultiplier, time);
            
            // Применяем огибающие для разных типов звуков
            if (this.waveType === 'piano' || this.waveType === 'guitar') {
                masterGain.gain.exponentialRampToValueAtTime(0.01, time + Math.min(duration, 2));
            } else if (this.waveType === 'strings' || this.waveType === 'brass') {
                masterGain.gain.linearRampToValueAtTime(volumeMultiplier, time + 0.1);
                masterGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
            } else {
                masterGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
            }
            
            if (customGain) {
                customGain.connect(masterGain);
            } else {
                oscillator.connect(masterGain);
            }
            masterGain.connect(this.audioContext.destination);
            
            if (this.mediaRecorder && this.isRecording && this.recordingDestination) {
                masterGain.connect(this.recordingDestination);
            }
            
            oscillator.start(time);
            oscillator.stop(time + duration + 0.1);
            
            extras.forEach(osc => {
                if (osc && osc.start) {
                    osc.start(time);
                    osc.stop(time + duration + 0.1);
                }
            });
            
            // Удаляем ноту из визуализатора после окончания
            setTimeout(() => {
                console.log('Removing note from visualizer:', note);
                this.visualizer.removeNote(note);
            }, duration * 1000);
            
        } catch (error) {
            console.error('Ошибка воспроизведения ноты:', error);
        }
    }

    pause() {
        this.isPlaying = false;
        this.isPaused = true;
        this.clearScheduledEvents();
        this.stopTimeUpdate();
    }

    stop() {
        this.isPlaying = false;
        this.isPaused = false;
        this.currentTime = 0;
        this.clearScheduledEvents();
        this.stopTimeUpdate();
        this.visualizer.stop();
    }

    clearScheduledEvents() {
        this.scheduledEvents.forEach(id => clearTimeout(id));
        this.scheduledEvents = [];
    }

    startTimeUpdate() {
        const startTime = Date.now();
        const initialTime = this.currentTime;

        this.updateInterval = setInterval(() => {
            if (this.isPlaying) {
                const elapsed = (Date.now() - startTime) / 1000;
                this.currentTime = initialTime + elapsed * (this.tempo / 100);

                if (this.currentTime >= this.duration) {
                    this.stop();
                }
            }
        }, 100);
    }

    stopTimeUpdate() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    setVolume(volume) {
        this.volume = volume;
    }

    setTempo(tempo) {
        const wasPlaying = this.isPlaying;
        const currentTime = this.currentTime;

        if (wasPlaying) {
            this.stop();
        }

        this.tempo = tempo;

        if (wasPlaying) {
            this.play(currentTime);
        }
    }

    setWaveType(type) {
        this.waveType = type;
    }

    seek(time) {
        const wasPlaying = this.isPlaying;
        this.stop();
        this.currentTime = time;
        
        if (wasPlaying) {
            this.play(time);
        }
    }

    async startRecording() {
        await this.init();
        
        this.recordingDestination = this.audioContext.createMediaStreamDestination();
        this.mediaRecorder = new MediaRecorder(this.recordingDestination.stream);
        this.recordedChunks = [];

        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                this.recordedChunks.push(event.data);
            }
        };

        this.mediaRecorder.start();
        this.isRecording = true;
    }

    stopRecording() {
        return new Promise((resolve) => {
            if (!this.mediaRecorder) {
                resolve(null);
                return;
            }

            this.mediaRecorder.onstop = () => {
                const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
                this.isRecording = false;
                this.mediaRecorder = null;
                this.recordingDestination = null;
                resolve(blob);
            };

            this.mediaRecorder.stop();
        });
    }

    exportToJSON() {
        if (!this.midiData) return null;

        const ticksPerBeat = this.midiData.ticksPerBeat;
        const tempoChanges = [];

        this.midiData.tracks.forEach(track => {
            track.events.forEach(event => {
                if (event.type === 'tempo') {
                    tempoChanges.push({
                        tick: event.time,
                        microsecondsPerBeat: event.microsecondsPerBeat
                    });
                }
            });
        });

        tempoChanges.sort((a, b) => a.tick - b.tick);

        const tracks = this.midiData.tracks.map(track => {
            const noteMap = new Map();
            const notes = [];

            track.events.forEach(event => {
                const eventTime = this.ticksToSeconds(event.time, ticksPerBeat, tempoChanges);

                if (event.type === 'noteOn') {
                    noteMap.set(event.note, {
                        note: event.note,
                        velocity: event.velocity,
                        time: eventTime
                    });
                } else if (event.type === 'noteOff') {
                    const noteOn = noteMap.get(event.note);
                    if (noteOn) {
                        notes.push({
                            note: noteOn.note,
                            time: noteOn.time,
                            duration: eventTime - noteOn.time,
                            velocity: noteOn.velocity
                        });
                        noteMap.delete(event.note);
                    }
                }
            });

            return { notes };
        });

        return { tracks };
    }
}

// ===== UI ЛОГИКА =====
let player;
let visualizer;
let currentFileName = '';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация
    const canvas = document.getElementById('canvas');
    const vizDebug = document.getElementById('vizDebug');
    
    console.log('Initializing visualizer with canvas:', canvas);
    visualizer = new Visualizer(canvas, vizDebug);
    player = new MIDIPlayer(visualizer);

    // Элементы
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const midiInfo = document.getElementById('midiInfo');
    const tempoInfo = document.getElementById('tempoInfo');
    const visualizerEl = document.getElementById('visualizer');
    const visualizationMode = document.getElementById('visualizationMode');
    const instrumentSelector = document.getElementById('instrumentSelector');
    const volumeControl = document.getElementById('volumeControl');
    const tempoControl = document.getElementById('tempoControl');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const status = document.getElementById('status');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    const tempoSlider = document.getElementById('tempoSlider');
    const tempoValue = document.getElementById('tempoValue');
    const waveType = document.getElementById('waveType');

    // Табы
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const targetTab = tab.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Загрузка файла
    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleFile(file);
    });

    function handleFile(file) {
        currentFileName = file.name;
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const midiData = player.loadMIDI(e.target.result);
                
                fileName.textContent = file.name;
                fileInfo.classList.add('active');
                
                let infoText = `Формат: ${midiData.format}, Треков: ${midiData.trackCount}, `;
                infoText += `Разрешение: ${midiData.ticksPerBeat} ticks/beat`;
                
                if (midiData.isSMPTE) {
                    infoText += ` (SMPTE: ${midiData.framesPerSecond} fps)`;
                }
                
                midiInfo.textContent = infoText;
                
                if (midiData.tempoMap && midiData.tempoMap.length > 0) {
                    const firstTempo = midiData.tempoMap[0];
                    tempoInfo.textContent = `Темп: ${firstTempo.bpm.toFixed(2)} BPM (${firstTempo.microsecondsPerBeat} мкс/beat)`;
                    tempoInfo.style.display = 'block';
                }
                
                visualizerEl.classList.add('active');
                visualizationMode.classList.add('active');
                instrumentSelector.classList.add('active');
                volumeControl.classList.add('active');
                tempoControl.classList.add('active');
                progressContainer.classList.add('active');
                
                totalTimeEl.textContent = formatTime(player.duration);
                
                playBtn.disabled = false;
                pauseBtn.disabled = false;
                stopBtn.disabled = false;
                
                document.getElementById('exportJsonBtn').disabled = false;
                document.getElementById('exportWavBtn').disabled = false;
                document.getElementById('startRecordBtn').disabled = false;
                
                status.textContent = 'Файл загружен. Готов к воспроизведению.';
                
            } catch (error) {
                status.textContent = 'Ошибка: ' + error.message;
                console.error(error);
            }
        };
        
        reader.readAsArrayBuffer(file);
    }

    // Визуализация
    const vizBtns = document.querySelectorAll('.viz-btn');
    vizBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            vizBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            visualizer.setMode(btn.getAttribute('data-mode'));
        });
    });

    // Управление
    playBtn.addEventListener('click', async () => {
        console.log('Play button clicked');
        await player.play(player.currentTime);
        status.textContent = 'Воспроизведение...';
    });

    pauseBtn.addEventListener('click', () => {
        player.pause();
        status.textContent = 'Пауза';
    });

    stopBtn.addEventListener('click', () => {
        player.stop();
        currentTimeEl.textContent = '0:00';
        progressFill.style.width = '0%';
        status.textContent = 'Остановлено';
    });

    // Громкость
    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        volumeValue.textContent = value + '%';
        player.setVolume(parseInt(value));
    });

    // Темп
    tempoSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        tempoValue.textContent = value + '%';
        player.setTempo(parseInt(value));
    });

    // Тип звука
    waveType.addEventListener('change', (e) => {
        player.setWaveType(e.target.value);
    });

    // Прогресс
    setInterval(() => {
        if (player.isPlaying) {
            const progress = (player.currentTime / player.duration) * 100;
            progressFill.style.width = progress + '%';
            currentTimeEl.textContent = formatTime(player.currentTime);
        }
    }, 100);

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const time = percentage * player.duration;
        player.seek(time);
        progressFill.style.width = (percentage * 100) + '%';
        currentTimeEl.textContent = formatTime(time);
    });

    // Экспорт JSON
    document.getElementById('exportJsonBtn').addEventListener('click', () => {
        const jsonData = player.exportToJSON();
        if (jsonData) {
            const jsonStr = JSON.stringify(jsonData, null, 2);
            document.getElementById('jsonOutput').value = jsonStr;
            document.getElementById('downloadJsonBtn').disabled = false;
        }
    });

    document.getElementById('downloadJsonBtn').addEventListener('click', () => {
        const jsonStr = document.getElementById('jsonOutput').value;
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentFileName.replace(/\.(mid|midi)$/i, '.json');
        a.click();
        URL.revokeObjectURL(url);
    });

    // Импорт JSON
    const jsonUploadArea = document.getElementById('jsonUploadArea');
    const jsonFileInput = document.getElementById('jsonFileInput');

    jsonUploadArea.addEventListener('click', () => jsonFileInput.click());

    jsonUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        jsonUploadArea.classList.add('dragover');
    });

    jsonUploadArea.addEventListener('dragleave', () => {
        jsonUploadArea.classList.remove('dragover');
    });

    jsonUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        jsonUploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/json') {
            handleJSONFile(file);
        }
    });

    jsonFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleJSONFile(file);
    });

    function handleJSONFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('jsonInput').value = e.target.result;
        };
        reader.readAsText(file);
    }

    document.getElementById('createMidiBtn').addEventListener('click', () => {
        try {
            const jsonStr = document.getElementById('jsonInput').value;
            const jsonData = JSON.parse(jsonStr);
            
            const writer = new MIDIWriter();
            const midiBytes = writer.createMIDI(jsonData);
            
            const blob = new Blob([midiBytes], { type: 'audio/midi' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'created.mid';
            a.click();
            URL.revokeObjectURL(url);
            
            document.getElementById('importStatus').textContent = '✅ MIDI файл создан и скачан!';
        } catch (error) {
            document.getElementById('importStatus').textContent = '❌ Ошибка: ' + error.message;
        }
    });

    document.getElementById('previewMidiBtn').addEventListener('click', () => {
        try {
            const jsonStr = document.getElementById('jsonInput').value;
            const jsonData = JSON.parse(jsonStr);
            
            const writer = new MIDIWriter();
            const midiBytes = writer.createMIDI(jsonData);
            
            player.loadMIDI(midiBytes.buffer);
            
            tabs[0].click();
            
            fileName.textContent = 'Предпросмотр созданного MIDI';
            fileInfo.classList.add('active');
            midiInfo.textContent = `Треков: ${jsonData.tracks.length}`;
            
            visualizerEl.classList.add('active');
            visualizationMode.classList.add('active');
            instrumentSelector.classList.add('active');
            volumeControl.classList.add('active');
            tempoControl.classList.add('active');
            progressContainer.classList.add('active');
            
            totalTimeEl.textContent = formatTime(player.duration);
            
            playBtn.disabled = false;
            pauseBtn.disabled = false;
            stopBtn.disabled = false;
            
            document.getElementById('importStatus').textContent = '✅ Предпросмотр готов!';
        } catch (error) {
            document.getElementById('importStatus').textContent = '❌ Ошибка: ' + error.message;
        }
    });

    // Запись
    document.getElementById('startRecordBtn').addEventListener('click', async () => {
        await player.startRecording();
        document.getElementById('recordingIndicator').classList.add('active');
        document.getElementById('stopRecordBtn').disabled = false;
        document.getElementById('startRecordBtn').disabled = true;
        document.getElementById('recordStatus').textContent = 'Запись началась. Нажмите "Играть" для воспроизведения.';
    });

    document.getElementById('stopRecordBtn').addEventListener('click', async () => {
        const audioBlob = await player.stopRecording();
        if (audioBlob) {
            document.getElementById('recordingIndicator').classList.remove('active');
            document.getElementById('downloadAudioBtn').disabled = false;
            document.getElementById('stopRecordBtn').disabled = true;
            document.getElementById('startRecordBtn').disabled = false;
            
            document.getElementById('downloadAudioBtn').onclick = () => {
                const url = URL.createObjectURL(audioBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = currentFileName.replace(/\.(mid|midi)$/i, '.webm');
                a.click();
                URL.revokeObjectURL(url);
            };
            
            document.getElementById('recordStatus').textContent = '✅ Запись завершена. Нажмите "Скачать аудио".';
        }
    });

    // Изменение размера окна
    window.addEventListener('resize', () => {
        visualizer.resize();
    });
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}