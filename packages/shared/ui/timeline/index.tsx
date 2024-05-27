import fs from 'node:fs';
import path from 'node:path';

export function Timeline() {
  return (
    <>
      <div data-timeline-target class="timeline"></div>
      <noscript>Please, enable JavaScript to view the timeline.</noscript>

      <script
        dangerouslySetInnerHTML={{
          __html: fs
            .readFileSync(path.resolve(import.meta.dirname, './script.js'))
            .toString(),
        }}
      ></script>
    </>
  );
}
