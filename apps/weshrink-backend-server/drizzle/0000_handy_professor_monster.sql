CREATE TABLE `url` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`long_url` text NOT NULL,
	`user_id` text,
	`alias` text,
	`short_code` text NOT NULL,
	`expires_at` text NOT NULL,
	`expired` integer NOT NULL,
	`click_count` integer NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `url_alias_unique` ON `url` (`alias`);--> statement-breakpoint
CREATE UNIQUE INDEX `url_short_code_unique` ON `url` (`short_code`);