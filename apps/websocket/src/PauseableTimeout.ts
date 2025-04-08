export class PauseableTimeout {
    private callback: () => void;
    private delay: number;
    private timerId: NodeJS.Timeout | null = null;
    private startTime: number = 0;
    private remaining: number;
  
    constructor(callback: () => void, delay: number) {
      this.callback = callback;
      this.delay = delay;
      this.remaining = delay;
  
      this.resume();
    }
  
    pause() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
        this.remaining -= Date.now() - this.startTime;
      }
    }
  
    resume() {
      if (this.timerId) return;
  
      this.startTime = Date.now();
      this.timerId = setTimeout(this.callback, this.remaining);
    }
  
    cancel() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.timerId = null;
      this.remaining = this.delay;
    }
    get remainingTime() {
      return this.remaining;
    }
  }
  