import CounterServer from '@/components/counter-server';

export default function Homepage() {
  return (
    <>
      <div class="hero">
        <h1>
          <span class="h1_addition">Welcome to </span>Brisa
        </h1>
        <p class="edit-note">✏️ Change this page on </p>
        <code>src/pages/index.tsx</code>
      </div>

      <section class="counter-section">
        <h2>Counters</h2>
        <div class="counters">
          <counter-client initialValue={40} />
          <CounterServer initialValue={30} />
        </div>
      </section>
    </>
  );
}
