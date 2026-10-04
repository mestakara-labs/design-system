import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPStates() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Error: add aria-invalid to every slot */}
      <InputOTP maxLength={4} defaultValue="1234" aria-label="Kode salah">
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} aria-invalid="true" />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {/* Disabled */}
      <InputOTP maxLength={4} disabled aria-label="Kode (non-aktif)">
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
