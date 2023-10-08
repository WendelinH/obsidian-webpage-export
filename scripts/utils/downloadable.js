import { __awaiter } from "tslib";
export class Downloadable {
    constructor(filename, content, vaultRelativeDestination, encoding = "utf8") {
        if (vaultRelativeDestination.isFile)
            throw new Error("vaultRelativeDestination must be a folder: " + vaultRelativeDestination.asString);
        this.filename = filename;
        this.content = content;
        this.relativeDownloadPath = vaultRelativeDestination;
        this.encoding = encoding;
    }
    download(downloadDirectory) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = this.content instanceof Buffer ? this.content : Buffer.from(this.content.toString(), this.encoding);
            let writePath = this.relativeDownloadPath.absolute(downloadDirectory).joinString(this.filename);
            yield writePath.writeFile(data, this.encoding);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG93bmxvYWRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxNQUFNLE9BQU8sWUFBWTtJQU94QixZQUFZLFFBQWdCLEVBQUUsT0FBd0IsRUFBRSx3QkFBOEIsRUFBRSxXQUF1QyxNQUFNO1FBRXBJLElBQUcsd0JBQXdCLENBQUMsTUFBTTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLEdBQUcsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLHdCQUF3QixDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFSyxRQUFRLENBQUMsaUJBQXVCOztZQUVyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRyxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi9wYXRoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG93bmxvYWRhYmxlXHJcbntcclxuXHRmaWxlbmFtZTogc3RyaW5nO1xyXG5cdGNvbnRlbnQ6IHN0cmluZyB8IEJ1ZmZlcjtcclxuXHRyZWxhdGl2ZURvd25sb2FkUGF0aDogUGF0aDtcclxuXHRlbmNvZGluZzogQnVmZmVyRW5jb2RpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGZpbGVuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB8IEJ1ZmZlciwgdmF1bHRSZWxhdGl2ZURlc3RpbmF0aW9uOiBQYXRoLCBlbmNvZGluZzogQnVmZmVyRW5jb2RpbmcgfCB1bmRlZmluZWQgPSBcInV0ZjhcIilcclxuXHR7XHJcblx0XHRpZih2YXVsdFJlbGF0aXZlRGVzdGluYXRpb24uaXNGaWxlKSB0aHJvdyBuZXcgRXJyb3IoXCJ2YXVsdFJlbGF0aXZlRGVzdGluYXRpb24gbXVzdCBiZSBhIGZvbGRlcjogXCIgKyB2YXVsdFJlbGF0aXZlRGVzdGluYXRpb24uYXNTdHJpbmcpO1xyXG5cclxuXHRcdHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHR0aGlzLnJlbGF0aXZlRG93bmxvYWRQYXRoID0gdmF1bHRSZWxhdGl2ZURlc3RpbmF0aW9uO1xyXG5cdFx0dGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZG93bmxvYWQoZG93bmxvYWREaXJlY3Rvcnk6IFBhdGgpXHJcblx0e1xyXG5cdFx0bGV0IGRhdGEgPSB0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBCdWZmZXIgPyB0aGlzLmNvbnRlbnQgOiBCdWZmZXIuZnJvbSh0aGlzLmNvbnRlbnQudG9TdHJpbmcoKSwgdGhpcy5lbmNvZGluZyk7XHJcblx0XHRsZXQgd3JpdGVQYXRoID0gdGhpcy5yZWxhdGl2ZURvd25sb2FkUGF0aC5hYnNvbHV0ZShkb3dubG9hZERpcmVjdG9yeSkuam9pblN0cmluZyh0aGlzLmZpbGVuYW1lKTtcclxuXHRcdGF3YWl0IHdyaXRlUGF0aC53cml0ZUZpbGUoZGF0YSwgdGhpcy5lbmNvZGluZyk7XHJcblx0fVxyXG59Il19